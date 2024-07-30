import React from "react";
import { G, Path, Svg, type SvgProps } from "react-native-svg";

export interface IconProps extends SvgProps {
	height?: string | number;
	width?: string | number;
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
