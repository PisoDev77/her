import { createContext } from 'react';

export const HangManContext = createContext({});

export const ScheduleContext = createContext({});

export const ColorModeContext = createContext({ toggleColormode: () => {} });
