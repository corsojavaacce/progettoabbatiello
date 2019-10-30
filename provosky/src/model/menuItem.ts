export interface MenuItem {
    label: string;
    routerLink: string;
    isActive: boolean;
    icon?: string;
    children?: MenuItem[];
}