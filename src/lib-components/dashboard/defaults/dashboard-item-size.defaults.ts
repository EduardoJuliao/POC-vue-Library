import { DashboardItemSizeType } from "../enums/dashboard-item-size.enum";

export class DasboardItemSizeDefaults{
    public static readonly x: DashboardItemSizeType = DashboardItemSizeType.Small;
    public static readonly y: DashboardItemSizeType = DashboardItemSizeType.Small;

    public static readonly instance: DasboardItemSizeDefaults = this;
}