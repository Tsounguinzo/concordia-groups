// Custom types
export type ANIMATE_SPEED = undefined | false | 'slower' | 'slow' | 'normal' | 'fast' | 'faster'
export type ROUNDED = 'sm' | 'md' | 'lg' | 'xl' | 'full' | false | undefined
export type SHADOW = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | undefined
export type PRELOAD = '' | 'off' | 'tap' | 'hover'
export type TABLE_ROW = object | (object | string | string[])[] | undefined
export type BUTTON_SIZE = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 0
export type INPUT_VARIANT = 'filled' | 'bordered' | 'flat'
export type BREADCRUMB_DATA = Array<{text: string, url?: string}>
export type DROPDOWN_ITEM = { active?: boolean, url?: string, text?: string, type?: 'link' | 'divider' | 'header', preload?: PRELOAD }
export type DROPDOWN_ITEM_CONFIG = { activeClass?: string, linkClass?: string, dividerClass?: string, headerClass?: string }
export type NOTIFICATION = 'error' | 'info' | 'success' | 'warning'

export type INPUT_CONFIG = {
    animate?: ANIMATE_SPEED,
    inputGrow?: boolean,
    labelStyle?: string,
    reset?: boolean,
    rounded?: ROUNDED,
    size?: 'none' | 'sm' | 'md' | 'lg' | 'xl',
    variant?: INPUT_VARIANT,
}