import {
  AppLayout,
  Badge,
  BarChart,
  Box,
  BreadcrumbGroup,
  Button,
  ColumnLayout,
  Container,
  Header,
  Link,
  PieChart,
  SideNavigation,
  SpaceBetween,
  TopNavigation,
} from "@cloudscape-design/components";

function App() {
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
            Dashboard
          </Header>
        }
        navigation={
          <SideNavigation
            header={{
              href: "/",
              text: "BugTracker",
            }}
            items={[
              { type: "link", text: "Page 1", href: "#/page1" },
              { type: "link", text: "Page 2", href: "#/page2" },
              { type: "link", text: "Page 3", href: "#/page3" },
              { type: "link", text: "Page 4", href: "#/page4" },
              { type: "divider" },
              {
                type: "link",
                text: "Notifications",
                href: "#/notifications",
                info: <Badge color="red">23</Badge>,
              },
              {
                type: "link",
                text: "Documentation",
                href: "https://example.com",
                external: true,
              },
            ]}
          />
        }
        breadcrumbs={
          <BreadcrumbGroup
            items={[
              { text: "System", href: "#" },
              { text: "Components", href: "#components" },
              {
                text: "Breadcrumb group",
                href: "#components/breadcrumb-group",
              },
            ]}
            ariaLabel="Breadcrumbs"
          />
        }
        content={
          <Container
            header={
              <Header variant="h2" description="Viewing data from last month">
                Overview
              </Header>
            }
          >
            <ColumnLayout columns={3} borders="all">
              <Box padding={"s"}>
                <h3>In Progress Tickets</h3>
                <Link fontSize={"heading-xl"}>3</Link>
              </Box>
              <Box padding={"s"}>
                <h3>Open Tickets</h3>
                <Link fontSize={"heading-xl"}>43</Link>
              </Box>
              <Box padding={"s"}>
                <h3>Closed Tickets</h3>
                <Link fontSize={"heading-xl"}>456</Link>
              </Box>
            </ColumnLayout>
            <ColumnLayout columns={1} borders={"horizontal"}>
              <BarChart
                series={[
                  {
                    title: "Site 1",
                    type: "bar",
                    data: [
                      { x: new Date(1601058600000), y: 470319 },
                      { x: new Date(1601065800000), y: 374991 },
                      { x: new Date(1601073000000), y: 430357 },
                      { x: new Date(1601080200000), y: 440773 },
                      { x: new Date(1601087400000), y: 464442 },
                    ],
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
                        : Math.abs(e) >= 1e6
                        ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                        : Math.abs(e) >= 1e3
                        ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                        : e.toFixed(2);
                    },
                  },
                  {
                    title: "Site 2",
                    type: "bar",
                    data: [
                      { x: new Date(1601058600000), y: 452301 },
                      { x: new Date(1601065800000), y: 432909 },
                      { x: new Date(1601073000000), y: 463349 },
                      { x: new Date(1601080200000), y: 470328 },
                      { x: new Date(1601087400000), y: 485630 },
                    ],
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
                        : Math.abs(e) >= 1e6
                        ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                        : Math.abs(e) >= 1e3
                        ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                        : e.toFixed(2);
                    },
                  },
                  {
                    title: "Site 3",
                    type: "bar",
                    data: [
                      { x: new Date(1601058600000), y: 301030 },
                      { x: new Date(1601065800000), y: 352920 },
                      { x: new Date(1601073000000), y: 368204 },
                      { x: new Date(1601080200000), y: 358290 },
                      { x: new Date(1601087400000), y: 210720 },
                    ],
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
                        : Math.abs(e) >= 1e6
                        ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                        : Math.abs(e) >= 1e3
                        ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                        : e.toFixed(2);
                    },
                  },
                  {
                    title: "Site 4",
                    type: "bar",
                    data: [
                      { x: new Date(1601058600000), y: 91394 },
                      { x: new Date(1601065800000), y: 56012 },
                      { x: new Date(1601073000000), y: 156204 },
                      { x: new Date(1601080200000), y: 98349 },
                      { x: new Date(1601087400000), y: 99249 },
                    ],
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
                        : Math.abs(e) >= 1e6
                        ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                        : Math.abs(e) >= 1e3
                        ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                        : e.toFixed(2);
                    },
                  },
                  {
                    title: "Site 5",
                    type: "bar",
                    data: [
                      { x: new Date(1601058600000), y: 102032 },
                      { x: new Date(1601065800000), y: 84201 },
                      { x: new Date(1601073000000), y: 173002 },
                      { x: new Date(1601080200000), y: 103283 },
                      { x: new Date(1601087400000), y: 95382 },
                    ],
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
                        : Math.abs(e) >= 1e6
                        ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                        : Math.abs(e) >= 1e3
                        ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                        : e.toFixed(2);
                    },
                  },
                  {
                    title: "Site 6",
                    type: "bar",
                    data: [
                      { x: new Date(1601058600000), y: 45029 },
                      { x: new Date(1601065800000), y: 99291 },
                      { x: new Date(1601073000000), y: 90325 },
                      { x: new Date(1601080200000), y: 23940 },
                      { x: new Date(1601087400000), y: 59321 },
                    ],
                    valueFormatter: function l(e) {
                      return Math.abs(e) >= 1e9
                        ? (e / 1e9).toFixed(1).replace(/\.0$/, "") + "G"
                        : Math.abs(e) >= 1e6
                        ? (e / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
                        : Math.abs(e) >= 1e3
                        ? (e / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
                        : e.toFixed(2);
                    },
                  },
                ]}
                xDomain={[
                  new Date(1601058600000),
                  new Date(1601065800000),
                  new Date(1601073000000),
                  new Date(1601080200000),
                  new Date(1601087400000),
                ]}
                yDomain={[0, 500000]}
                i18nStrings={{
                  filterLabel: "Filter displayed data",
                  filterPlaceholder: "Filter data",
                  filterSelectedAriaLabel: "selected",
                  legendAriaLabel: "Legend",
                  chartAriaRoleDescription: "line chart",
                  xTickFormatter: (e) =>
                    e
                      .toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: !1,
                      })
                      .split(",")
                      .join("\n"),
                  yTickFormatter: undefined,
                }}
                ariaLabel="Multiple data series line chart"
                errorText="Error loading data."
                height={300}
                loadingText="Loading chart"
                recoveryText="Retry"
                xScaleType="categorical"
                xTitle="Time (UTC)"
                yTitle="Bytes transferred"
                empty={
                  <Box textAlign="center" color="inherit">
                    <b>No data available</b>
                    <Box variant="p" color="inherit">
                      There is no data available
                    </Box>
                  </Box>
                }
                noMatch={
                  <Box textAlign="center" color="inherit">
                    <b>No matching data</b>
                    <Box variant="p" color="inherit">
                      There is no matching data to display
                    </Box>
                    <Button>Clear filter</Button>
                  </Box>
                }
              />
              <PieChart
                data={[
                  {
                    title: "Running",
                    value: 60,
                    lastUpdate: "Dec 7, 2020",
                  },
                  {
                    title: "Failed",
                    value: 30,
                    lastUpdate: "Dec 6, 2020",
                  },
                  {
                    title: "In-progress",
                    value: 10,
                    lastUpdate: "Dec 6, 2020",
                  },
                  {
                    title: "Pending",
                    value: 0,
                    lastUpdate: "Dec 7, 2020",
                  },
                ]}
                detailPopoverContent={(datum, sum) => [
                  { key: "Resource count", value: datum.value },
                  {
                    key: "Percentage",
                    value: `${((datum.value / sum) * 100).toFixed(0)}%`,
                  },
                  { key: "Last update on", value: datum.lastUpdate },
                ]}
                segmentDescription={(datum, sum) =>
                  `${datum.value} units, ${((datum.value / sum) * 100).toFixed(
                    0
                  )}%`
                }
                i18nStrings={{
                  detailsValue: "Value",
                  detailsPercentage: "Percentage",
                  filterLabel: "Filter displayed data",
                  filterPlaceholder: "Filter data",
                  filterSelectedAriaLabel: "selected",
                  detailPopoverDismissAriaLabel: "Dismiss",
                  legendAriaLabel: "Legend",
                  chartAriaRoleDescription: "pie chart",
                  segmentAriaRoleDescription: "segment",
                }}
                ariaDescription="Pie chart showing how many resources are currently in which state."
                ariaLabel="Pie chart"
                errorText="Error loading data."
                loadingText="Loading chart"
                recoveryText="Retry"
                empty={
                  <Box textAlign="center" color="inherit">
                    <b>No data available</b>
                    <Box variant="p" color="inherit">
                      There is no data available
                    </Box>
                  </Box>
                }
                noMatch={
                  <Box textAlign="center" color="inherit">
                    <b>No matching data</b>
                    <Box variant="p" color="inherit">
                      There is no matching data to display
                    </Box>
                    <Button>Clear filter</Button>
                  </Box>
                }
              />
            </ColumnLayout>
          </Container>
        }
      />
    </>
  );
}

export default App;
