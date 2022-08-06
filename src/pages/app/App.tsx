import {
  AppLayout,
  BreadcrumbGroup,
  Button,
  Header,
  SideNavigation,
  SpaceBetween,
  TopNavigation,
} from "@cloudscape-design/components";
import { useEffect, useState } from "react";
import { Outlet, useNavigate, useOutlet } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <>
      <TopNavigation
        identity={{
          href: "#",
          title: "BugTracker",
        }}
        utilities={[
          {
            type: "button",
            text: "Link",
            href: "https://example.com/",
            external: true,
            externalIconAriaLabel: " (opens in a new tab)",
          },
          {
            type: "button",
            iconName: "notification",
            title: "Notifications",
            ariaLabel: "Notifications (unread)",
            badge: true,
            disableUtilityCollapse: false,
          },
          {
            type: "menu-dropdown",
            iconName: "settings",
            ariaLabel: "Settings",
            title: "Settings",
            items: [
              {
                id: "settings-org",
                text: "Organizational settings",
              },
              {
                id: "settings-project",
                text: "Project settings",
              },
            ],
          },
          {
            type: "menu-dropdown",
            text: "Customer Name",
            description: "email@example.com",
            iconName: "user-profile",
            items: [
              { id: "profile", text: "Profile" },
              { id: "preferences", text: "Preferences" },
              { id: "security", text: "Security" },
              {
                id: "support-group",
                text: "Support",
                items: [
                  {
                    id: "documentation",
                    text: "Documentation",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                  { id: "support", text: "Support" },
                  {
                    id: "feedback",
                    text: "Feedback",
                    href: "#",
                    external: true,
                    externalIconAriaLabel: " (opens in new tab)",
                  },
                ],
              },
              { id: "signout", text: "Sign out" },
            ],
          },
        ]}
        i18nStrings={{
          searchIconAriaLabel: "Search",
          searchDismissIconAriaLabel: "Close search",
          overflowMenuTriggerText: "More",
          overflowMenuTitleText: "All",
          overflowMenuBackIconAriaLabel: "Back",
          overflowMenuDismissIconAriaLabel: "Close menu",
        }}
      />
      <AppLayout
        contentType="default"
        ariaLabels={{
          navigation: "Navigation drawer",
          navigationClose: "Close navigation drawer",
          navigationToggle: "Open navigation drawer",
          notifications: "Notifications",
          tools: "Help panel",
          toolsClose: "Close help panel",
          toolsToggle: "Open help panel",
        }}
        contentHeader={
          <Header
            variant="h1"
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <Button>Secondary button</Button>
                <Button variant="primary">Primary button</Button>
              </SpaceBetween>
            }
          >
            {title}
          </Header>
        }
        navigation={
          <SideNavigation
            header={{
              href: "/",
              text: "BugTracker",
            }}
            onFollow={(event) => {
              if (!event.detail.external) {
                event.preventDefault();
                navigate(event.detail.href);
              }
            }}
            items={[
              { type: "link", text: "Dashboard", href: "/app" },
              { type: "divider" },
              { type: "link", text: "Users", href: "/app/users" },
            ]}
          />
        }
        content={<Outlet context={{ title, setTitle }} />}
      />
    </>
  );
}

export default App;
