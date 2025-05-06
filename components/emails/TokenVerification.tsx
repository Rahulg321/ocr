import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface TokenVerificationEmailProps {
  tokenConfirmLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const TokenVerificationEmail: React.FC<
  Readonly<TokenVerificationEmailProps>
> = ({ tokenConfirmLink }) => (
  <Html>
    <Head />
    <Preview>Verify your email address</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}></Section>
        <Heading style={h1}>Welcome to OCR!!!!</Heading>
        <Text style={heroText}>
          You need to verify your email address first to create your account.
          Simply click the link below, and you&apos;re all set.
        </Text>

        <Section style={codeBox}>
          <Link href={tokenConfirmLink} style={buttonLink}>
            Click here to confirm your email
          </Link>
        </Section>

        <Text style={text}>
          If you didn&apos;t request this email, there&apos;s nothing to worry
          about, you can safely ignore it.
        </Text>

        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: "66%" }}>
              <Img
                src={`${baseUrl}/public/hydranode_logo.png`} // Add your Hydranode logo again here
                width="120"
                height="36"
                alt="Hydranode"
              />
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            style={footerLink}
            href="https://hydranode.ai/pricing" // Replace with your blog or other relevant links
            target="_blank"
            rel="noopener noreferrer"
          >
            Pricing
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://hydranode.ai/about-us" // Replace with your policies link
            target="_blank"
            rel="noopener noreferrer"
          >
            About us
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://hydranode.ai/help" // Replace with your help center link
            target="_blank"
            rel="noopener noreferrer"
          >
            Help center
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://hydranode.ai/community" // Replace with your community link
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            Hydranode Community
          </Link>
          <Text style={footerText}>
            ©2023 Hydranode Technologies, All rights reserved. <br />
            Hydranode Street, UK <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default TokenVerificationEmail;

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
};

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
};

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

const socialMediaIcon = {
  display: "inline",
  marginLeft: "32px",
};

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

const logoContainer = {
  marginTop: "32px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginBottom: "30px",
  padding: "40px 10px",
};

const buttonLink = {
  fontSize: "18px",
  color: "#ffffff",
  textDecoration: "none",
  backgroundColor: "#0070f3",
  padding: "12px 24px",
  borderRadius: "5px",
  display: "block",
  textAlign: "center" as const,
};

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
};
