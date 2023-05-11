import useAuthToken from "@features/auth/hooks/use-auth-token";
import { Menu, Avatar, ActionIcon, MenuProps } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const ProfileMenu = (props: MenuProps) => {
  const router = useRouter();

  const { removeAuthToken } = useAuthToken();

  const handleLogout = () => {
    removeAuthToken();
    router.push("/");
  };

  return (
    <Menu shadow="md" width={200} {...props}>
      <Menu.Target>
        <ActionIcon>
          <Avatar radius={36} />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Application</Menu.Label>
        <Menu.Item
          onClick={handleLogout}
          color="red"
          icon={<IconLogout size={14} />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
export default ProfileMenu;
