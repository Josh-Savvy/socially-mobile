import React from "react";
import { G, Path, Svg, type SvgProps } from "react-native-svg";

export interface IconProps extends SvgProps {
	color?: string;
	height?: string | number;
	width?: string | number;
	size?: string | number;
}

export const UserIcon = ({ height, width, color, ...props }: IconProps) => {
	return (
		<Svg viewBox="0 0 20 20" height={height || 10} width={width || 10}>
			<Path
				fill="none"
				stroke={color || "#fff"}
				d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></Path>
			<Path
				fill="none"
				stroke={color || "#fff"}
				d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></Path>
		</Svg>
	);
};

export const MessageIcon = ({ width, height, color, ...props }: IconProps) => {
	return (
		<Svg width={width || "18"} height={height || "14"} viewBox="0 0 18 14" fill="none" {...props}>
			<Path
				d="M1.5 3.66666L8.075 8.05C8.34888 8.23273 8.67075 8.33025 9 8.33025C9.32925 8.33025 9.65112 8.23273 9.925 8.05L16.5 3.66666M3.16667 12.8333H14.8333C15.2754 12.8333 15.6993 12.6577 16.0118 12.3452C16.3244 12.0326 16.5 11.6087 16.5 11.1667V2.83333C16.5 2.3913 16.3244 1.96738 16.0118 1.65482C15.6993 1.34226 15.2754 1.16666 14.8333 1.16666H3.16667C2.72464 1.16666 2.30072 1.34226 1.98816 1.65482C1.67559 1.96738 1.5 2.3913 1.5 2.83333V11.1667C1.5 11.6087 1.67559 12.0326 1.98816 12.3452C2.30072 12.6577 2.72464 12.8333 3.16667 12.8333Z"
				stroke={color || "#ECEBED"}
				strokeWidth="1.4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

export const VeticalEllipsisIcon = ({ width, height, color, ...props }: IconProps) => {
	return (
		<Svg width={width || "4"} height={height || "18"} {...props} viewBox="0 0 4 18" fill="none">
			<Path
				d="M2 2V2.01V2ZM2 9V9.01V9ZM2 16V16.01V16ZM2 3C1.73478 3 1.48043 2.89464 1.29289 2.70711C1.10536 2.51957 1 2.26522 1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1C2.26522 1 2.51957 1.10536 2.70711 1.29289C2.89464 1.48043 3 1.73478 3 2C3 2.26522 2.89464 2.51957 2.70711 2.70711C2.51957 2.89464 2.26522 3 2 3ZM2 10C1.73478 10 1.48043 9.89464 1.29289 9.70711C1.10536 9.51957 1 9.26522 1 9C1 8.73478 1.10536 8.48043 1.29289 8.29289C1.48043 8.10536 1.73478 8 2 8C2.26522 8 2.51957 8.10536 2.70711 8.29289C2.89464 8.48043 3 8.73478 3 9C3 9.26522 2.89464 9.51957 2.70711 9.70711C2.51957 9.89464 2.26522 10 2 10ZM2 17C1.73478 17 1.48043 16.8946 1.29289 16.7071C1.10536 16.5196 1 16.2652 1 16C1 15.7348 1.10536 15.4804 1.29289 15.2929C1.48043 15.1054 1.73478 15 2 15C2.26522 15 2.51957 15.1054 2.70711 15.2929C2.89464 15.4804 3 15.7348 3 16C3 16.2652 2.89464 16.5196 2.70711 16.7071C2.51957 16.8946 2.26522 17 2 17Z"
				stroke={color || "#727477"}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
};

export const CommentIcon = ({ size, color, ...props }: IconProps) => (
	<Svg width={size || "14"} height={size || "14"} {...props} viewBox="0 0 14 14" fill="none">
		<Path
			d="M4.33333 7.00002H4.34M7 7.00002H7.00667M9.66667 7.00002H9.67333M13 7.00002C13 9.94535 10.3133 12.3334 7 12.3334C6.01909 12.3367 5.04986 12.1205 4.16333 11.7007L1 12.3334L1.93 9.85335C1.34133 9.02802 1 8.04935 1 7.00002C1 4.05469 3.68667 1.66669 7 1.66669C10.3133 1.66669 13 4.05469 13 7.00002Z"
			stroke={color || "#ECEBED"}
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export const ShareIcon = ({ size, color, ...props }: IconProps) => (
	<Svg width={size || "14"} height={size || "14"} {...props} viewBox="0 0 14 14" fill="none">
		<Path
			d="M1.66666 9.66669V10.3334C1.66666 10.8638 1.87738 11.3725 2.25245 11.7476C2.62752 12.1226 3.13623 12.3334 3.66666 12.3334H10.3333C10.8638 12.3334 11.3725 12.1226 11.7475 11.7476C12.1226 11.3725 12.3333 10.8638 12.3333 10.3334V9.66669M9.66666 4.33335L7 1.66669M7 1.66669L4.33333 4.33335M7 1.66669V9.66669"
			stroke={color || "#ECEBED"}
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export const BookmarkIcon = ({ width, height, color, ...props }: IconProps) => (
	<Svg width={width || "14"} height={height || "18"} viewBox="0 0 14 18" fill="none" {...props}>
		<Path
			d="M1.65481 1.98816C1.34225 2.30072 1.16666 2.72464 1.16666 3.16667V16.5L6.99999 13.5833L12.8333 16.5V3.16667C12.8333 2.72464 12.6577 2.30072 12.3452 1.98816C12.0326 1.67559 11.6087 1.5 11.1667 1.5H2.83332C2.3913 1.5 1.96737 1.67559 1.65481 1.98816Z"
			stroke={color || "#ECEBED"}
			strokeWidth="1.4"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);
