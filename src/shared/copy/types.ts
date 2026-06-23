import type { ZH_CN_UI_TEXT } from "./bundle.ts";

export type UiLanguage = "zh-CN" | "en-US";

export type WidenCopyValue<T> =
  T extends (...args: infer Args) => infer Return
    ? (...args: Args) => WidenCopyValue<Return>
    : T extends string
      ? string
      : T extends number
        ? number
        : T extends boolean
          ? boolean
          : T extends readonly (infer Item)[]
            ? WidenCopyValue<Item>[]
            : T extends Record<PropertyKey, unknown>
              ? { [Key in keyof T]: WidenCopyValue<T[Key]> }
              : T;

export type UiText = WidenCopyValue<typeof ZH_CN_UI_TEXT>;
