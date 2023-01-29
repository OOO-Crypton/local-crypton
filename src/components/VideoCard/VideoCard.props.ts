import { DetailedHTMLProps, HTMLAttributes } from "react";
import { VideoCardData } from "../../interface/VideoCardData.interface";

export interface VideoCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: VideoCardData[];
}
