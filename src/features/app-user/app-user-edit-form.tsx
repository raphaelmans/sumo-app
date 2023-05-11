import {
  Box,
  BoxProps,
  Button,
  Group,
  Input,
  NativeSelect,
  Stack,
} from "@mantine/core";
import { AppUser } from "@types";
import React from "react";
import { AppUserStatus, EditAppUserForm } from "./types";
import { useForm } from "react-hook-form";
import { editAppUserSchema } from "./form-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditUser } from "./hooks";
import { AppUserEdit } from "@shared/services/app-user-service";
import { appUserStatus } from "./constants";

type Props = BoxProps & {
  appUser: AppUser;
};

const AppUserEditForm = ({ appUser, ...props }: Props) => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<EditAppUserForm>({
    resolver: zodResolver(editAppUserSchema),
    mode: "onChange",
    defaultValues: {
      email: appUser.emailAddress,
      firstName: appUser.firstName,
      lastName: appUser.lastName,
      address: appUser.address,
      status: appUser.status as AppUserStatus,
    },
  });

  const { editUser, isMutating } = useEditUser();

  const onSubmit = (data: EditAppUserForm) => {
    // TODO: UPdate subscriptionCategoryId dynamic
    const appUserEdit: AppUserEdit = {
      id: appUser.id,
      emailAddress: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      status: data.status,
      userName: data.userName
    };
    editUser({
      data: appUserEdit,
    });
  };

  const onError = (error: any) => {
    console.error(
      "🚀 ~ file: subscription-new-form.tsx:43 ~ onError ~ error:",
      error
    );
  };

  return (
    <Box component="form" maw={500} onSubmit={handleSubmit(onSubmit, onError)}>
      <Stack px={48} py={24}>
        <Input.Wrapper
          label="Email"
          w="100%"
          error={errors?.email?.message?.toString()}
        >
          <Input type="text" placeholder="" {...register("email")} />
        </Input.Wrapper>
        <Input.Wrapper
          label="First Name"
          w="100%"
          error={errors?.firstName?.message?.toString()}
        >
          <Input type="text" placeholder="" {...register("firstName")} />
        </Input.Wrapper>
        <Input.Wrapper
          label="Last Name"
          w="100%"
          error={errors?.lastName?.message?.toString()}
        >
          <Input type="text" placeholder="" {...register("lastName")} />
        </Input.Wrapper>
        <Input.Wrapper
          label="Address"
          error={errors?.address?.message?.toString()}
          w="100%"
        >
          <Input type="text" placeholder="" {...register("address")} />
        </Input.Wrapper>
        <NativeSelect
          label="Status"
          placeholder="Choose"
          data={appUserStatus.map((value) => ({ label: value, value }))}
          error={errors?.status?.message?.toString()}
          {...register("status")}
        />
        <Group mt={28}>
          <Button
            variant="outline"
            bg="white"
            type="submit"
            loading={isMutating}
            disabled={!isValid}
          >
            EDIT
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default AppUserEditForm;
