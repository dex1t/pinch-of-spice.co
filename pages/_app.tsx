import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import tokens from "../components/DesignTokens";
import "ress";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

const globalStyle = css`
  html,
  body {
    font-family: -apple-system, "Helvetica Neue", "游ゴシック体", YuGothic,
      "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic",
      "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;
    color: ${tokens.colors.azuki};
    background: ${tokens.colors.ivory};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: "palt";
    font-size: 16px;
  }

  h1,
  h2 {
    font-family: "Trykker", "Hiragino Mincho ProN", "Hiragino Mincho Pro",
      游明朝, "Yu Mincho", YuMincho, HGS明朝E, メイリオ, Meiryo, serif;
  }

  ul,
  ol {
    list-style: none;
  }

  main > section {
  }

  main {
    > section {
      padding: 64px 132px;

      > h1 {
        font-size: 36px;
        text-align: center;
        margin-bottom: 64px;
      }
    }
  }

  a {
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
      text-decoration: inherit;
    }
  }
`;
