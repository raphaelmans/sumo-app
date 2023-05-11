import { Box, Stack, Textarea, Button } from "@mantine/core";
import React from "react";
import { SysRecipientsForm } from "./type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sysRecipientsSchema } from "./form-utils";
import { useRemindUsers } from "@features/app-user/hooks/use-remind-users";

type Props = {};

const SysConfigForm = (props: Props) => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<SysRecipientsForm>({
    resolver: zodResolver(sysRecipientsSchema),
    mode: "onChange",
  });

  const { remindUser, isMutating } = useRemindUsers();
  const onSubmit = async (data: SysRecipientsForm) => {
    try {
      await remindUser({
        emails: data.emails.split(","),
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onError = (error: any) => {
    console.error(
      "🚀 ~ file: subscription-new-form.tsx:43 ~ onError ~ error:",
      error
    );
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit, onError)}>
      <Stack w={430} mt={16} ml={48}>
        {/* <Input.Wrapper label="Days before users get notified about their subscription expiry">
        <Input type="number" placeholder="10" color="gray.9" />
      </Input.Wrapper> */}
        <Textarea
          placeholder="johndoe@gmail.com, alice@gmail.com"
          label="Recipient for Subscription Updates"
          withAsterisk
          mt={16}
          error={errors?.emails?.message?.toString()}
          {...register("emails")}
        />
        <Button
          variant="light"
          bg="white"
          sx={{
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
          }}
          w="min-content"
          ml="auto"
          loading={isMutating}
          disabled={!isValid}
          type="submit"
        >
          Save
        </Button>
      </Stack>
    </Box>
  );
};

export default SysConfigForm;
