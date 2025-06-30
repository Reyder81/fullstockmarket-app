export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        initData: string;
        initDataUnsafe: any;
        close: () => void;
        sendData: (data: string) => void;
        expand: () => void;
        enableClosingConfirmation: () => void;
        disableClosingConfirmation: () => void;
        isExpanded: boolean;
        isClosingConfirmationEnabled: boolean;
        viewportHeight: number;
        version: string;
        platform: string;
        colorScheme: "light" | "dark";
        setBackgroundColor: (color: string) => void;
        setHeaderColor: (color: string) => void;
        setFooterColor: (color: string) => void;
        onEvent: (eventType: string, callback: () => void) => void;
        offEvent: (eventType: string, callback: () => void) => void;
        MainButton: {
          setText: (text: string) => void;
          onClick: (callback: () => void) => void;
          show: () => void;
          hide: () => void;
          enable: () => void;
          disable: () => void;
          isVisible: boolean;
        };
      };
    };
  }
}
