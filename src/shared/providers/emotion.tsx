"use client";
import { CacheProvider } from "@emotion/react";
import { useEmotionCache, MantineProvider } from "@mantine/core";
import { theme } from "@theme";
import { useServerInsertedHTML } from "next/navigation";
import { SWRConfig } from "swr";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <SWRConfig>{children}</SWRConfig>
      </MantineProvider>
    </CacheProvider>
  );
}
