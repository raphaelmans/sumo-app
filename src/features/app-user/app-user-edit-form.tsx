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
import { EditAppUserForm } from "./types";
import { useForm } from "react-hook-form";
import { editAppUserSchema } from "./form-utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditUser } from "./hooks";
import { appUserStatus } from "./constants";
import { useRouter } from "next/navigation";

type Props = BoxProps & {
  appUser: AppUser;
};

const AppUserEditForm = ({ appUser, ...props }: Props) => {
  const router = useRouter();
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<EditAppUserForm>({
    resolver: zodResolver(editAppUserSchema),
    mode: "onChange",
    defaultValues: {
      userName: appUser.userName,
      emailAddress: appUser.emailAddress,
      firstName: appUser.firstName,
      lastName: appUser.lastName,
      address: appUser.address,
      status: appUser.status,
    },
  });

  const { editUser, isMutating } = useEditUser();

  const onSubmit = async (data: EditAppUserForm) => {
    // TODO: UPdate subscriptionCategoryId dynamic
    const appUserEdit: AppUser = {
      id: appUser.id,
      emailAddress: data.emailAddress,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      status: data.status,
      userName: data.userName,
    };
    try {
      const res = await editUser({
        data: appUserEdit,
      });
      if (res?.status === 200) {
        router.push("/user");
      }
    } catch (e) {}
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
          label="Username"
          w="100%"
          error={errors?.userName?.message?.toString()}
        >
          <Input
            placeholder="Enter username"
            type="text"
            {...register("userName")}
          />
        </Input.Wrapper>
        <Input.Wrapper
          label="Email"
          w="100%"
          error={errors?.emailAddress?.message?.toString()}
        >
          <Input
            type="text"
            placeholder="Enter email"
            {...register("emailAddress")}
          />
        </Input.Wrapper>
        <Input.Wrapper label="First Name" w="100%">
          <Input
            type="text"
            placeholder="Enter first name"
            {...register("firstName")}
          />
        </Input.Wrapper>
        <Input.Wrapper label="Last Name" w="100%">
          <Input
            type="text"
            placeholder="Enter last name"
            {...register("lastName")}
          />
        </Input.Wrapper>
        <Input.Wrapper
          label="Address"
          error={errors?.address?.message?.toString()}
          w="100%"
        >
          <Input
            type="text"
            placeholder="Enter address"
            {...register("address")}
          />
        </Input.Wrapper>
        <NativeSelect
          label="Status"
          placeholder="Choose"
          data={appUserStatus.map((value) => ({ label: value, value }))}
          error={errors?.status?.message?.toString()}
          w="100%"
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
            Edit
          </Button>
        </Group>
      </Stack>
    </Box>
  );
};

export default AppUserEditForm;
