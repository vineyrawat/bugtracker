import {
  AppLayout,
  Box,
  Button,
  Form,
  FormField,
  Header,
  Input,
  SpaceBetween,
  Tabs,
} from "@cloudscape-design/components";

export default function AuthPage() {
  return (
    <AppLayout
      navigationHide
      toolsHide
      contentType="form"
      maxContentWidth={350}
      content={
        <Box margin={{ top: "xxxl", left: "m", right: "m" }}>
          <Tabs
            tabs={[
              {
                id: "login",
                label: "Login",
                content: (
                  <form onSubmit={(e) => e.preventDefault()}>
                    <Form
                      actions={
                        <SpaceBetween direction="horizontal" size="xxxs">
                          <Button formAction="none" variant="link">
                            Forget Password
                          </Button>
                          <Button variant="primary">Login</Button>
                        </SpaceBetween>
                      }
                      header={
                        <Header description={"Login to continue"}>
                          Welcome back,
                        </Header>
                      }
                    >
                      <SpaceBetween size="xs" direction="vertical">
                        <FormField stretch label={"Email Address"}>
                          <Input
                            value=""
                            name="email"
                            placeholder="john@example.com"
                            type="email"
                          />
                        </FormField>
                        <FormField stretch label={"Password"}>
                          <Input
                            name="password"
                            value=""
                            placeholder="Enter password"
                            type="password"
                          />
                        </FormField>
                      </SpaceBetween>
                    </Form>
                  </form>
                ),
              },
              {
                id: "register",
                label: "Register",
                content: (
                  <form onSubmit={(e) => e.preventDefault()}>
                    <Form
                      actions={
                        <SpaceBetween direction="horizontal" size="xxxs">
                          <Button variant="primary">Register</Button>
                        </SpaceBetween>
                      }
                      header={
                        <Header description={"Create a new account"}>
                          Welcome,
                        </Header>
                      }
                    >
                      <SpaceBetween size="xs" direction="vertical">
                        <FormField stretch label={"Email Address"}>
                          <Input
                            name="email"
                            value=""
                            placeholder="john@example.com"
                            type="email"
                          />
                        </FormField>
                        <FormField stretch label={"Password"}>
                          <Input
                            name="password1"
                            value=""
                            placeholder="Create password"
                            type="password"
                          />
                        </FormField>
                        <FormField stretch label={"Confirm Password"}>
                          <Input
                            name="password2"
                            value=""
                            placeholder="Re-enter password"
                            type="password"
                          />
                        </FormField>
                      </SpaceBetween>
                    </Form>
                  </form>
                ),
              },
            ]}
          />
        </Box>
      }
    />
  );
}
