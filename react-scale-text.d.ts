declare module "react-scale-text" {
  import { ReactNode } from "react";

  interface ScaleTextProps {
    children: ReactNode;
    minFontSize?: number;
    maxFontSize?: number;
  }

  const ScaleText: React.FC<ScaleTextProps>;
  export default ScaleText;
}
