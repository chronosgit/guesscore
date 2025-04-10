import MenuElement from '@/components/layout/mobile_bottom_menu/MenuElement';
import {
	IconEyeglassLine,
	IconLayersFill,
	IconMenuFill,
	IconMusicFill,
} from '@/components/ui/icons';
import useScreenBreakpoints from '@/hooks/useScreenBreakpoints';

export default function MobileBottomMenu() {
	const { isScreenMD } = useScreenBreakpoints();

	if (isScreenMD) return;

	return (
		<div className="text-primary-200 bg-background-400 2xs:grid-cols-4 2xs:grid-rows-1 fixed right-0 bottom-0 left-0 grid grid-cols-2 grid-rows-2 items-center gap-1 p-1">
			<MenuElement text="Features" to="/features" isLink>
				<IconLayersFill className="max-w-6" />
			</MenuElement>

			<MenuElement text="Resources" to="/resources" isLink>
				<IconEyeglassLine className="max-w-6" />
			</MenuElement>

			<MenuElement
				text="Partitures"
				to="https://musescore.com/"
				linkTarget="_blank"
				isLink
			>
				<IconMusicFill className="max-w-6" />
			</MenuElement>

			<MenuElement text="Menu" isButton>
				<IconMenuFill className="max-w-5" />
			</MenuElement>
		</div>
	);
}
