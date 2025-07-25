import { Header } from "@/components/layout/header";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { ThemeSwitch } from "@/components/theme-switch";
import { LanguageSwitch } from "@/components/language-switch";

export const RootLayout = () => {
  return (
    <Header fixed>
      <div className="ml-auto flex items-center space-x-4">
        <LanguageSwitch />
        <ThemeSwitch />
        <ProfileDropdown />
      </div>
    </Header>
  );
};
