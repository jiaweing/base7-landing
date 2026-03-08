"use client";

import React from "react";

interface SpeechHighlightContextValue {
  currentCharIndex: number;
  isSpeaking: boolean;
  autoScroll: boolean;
}

const SpeechHighlightContext = React.createContext<SpeechHighlightContextValue>(
  {
    currentCharIndex: -1,
    isSpeaking: false,
    autoScroll: false,
  }
);

export function SpeechHighlightProvider({
  children,
  currentCharIndex = -1,
  isSpeaking = false,
  autoScroll = false,
}: React.PropsWithChildren<Partial<SpeechHighlightContextValue>>) {
  return (
    <SpeechHighlightContext.Provider
      value={{ currentCharIndex, isSpeaking, autoScroll }}
    >
      {children}
    </SpeechHighlightContext.Provider>
  );
}

export function useSpeechHighlight() {
  return React.useContext(SpeechHighlightContext);
}
