import {
  AppLayout,
  Box,
  Button,
  Cards,
  Header,
  Link,
  TopNavigation,
} from "@cloudscape-design/components";

export default function Orgs() {
  return (
    <>
      <TopNavigation
        identity={{ href: "/", title: "BugTracker" }}
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
        navigationHide
        toolsHide
        disableContentHeaderOverlap
        content={<OrgList />}
        contentHeader={
          <Header actions={<Button>Create Organization</Button>} variant="h1">
            Organizations
          </Header>
        }
      />
    </>
  );
}

function OrgList() {
  return (
    <Box margin={{ top: "l" }}>
      <Cards
        cardDefinition={{
          header: (e) => <Link fontSize="heading-l">{e.name}</Link>,
          sections: [
            {
              content: (e) => e.name,
            },
          ],
        }}
        empty={
          <Box textAlign="center" color="inherit">
            <b>No resources</b>
            <Box padding={{ bottom: "s" }} variant="p" color="inherit">
              No resources to display.
            </Box>
            <Button>Create resource</Button>
          </Box>
        }
        cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
        items={[
          {
            name: "Extension Technologies",
          },
        ]}
      ></Cards>
    </Box>
  );
}
