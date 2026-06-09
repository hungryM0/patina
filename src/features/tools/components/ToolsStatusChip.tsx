import type { LucideIcon } from "lucide-react";
import QuietTooltip from "../../../shared/components/QuietTooltip.tsx";
import { UI_TEXT } from "../../../shared/copy/uiText.ts";

interface ToolsStatusChipProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
  iconOnly?: boolean;
}

export default function ToolsStatusChip({
  label,
  icon: Icon,
  onClick,
  className,
  iconOnly = false,
}: ToolsStatusChipProps) {
  return (
    <QuietTooltip label={label} placement="top">
      <button
        type="button"
        onClick={onClick}
        aria-label={`${UI_TEXT.accessibility.tools.openStatusChip}: ${label}`}
        className={`tools-status-chip ${className ?? ""}`.trim()}
      >
        <Icon size={12} />
        {iconOnly ? null : <span>{label}</span>}
      </button>
    </QuietTooltip>
  );
}
