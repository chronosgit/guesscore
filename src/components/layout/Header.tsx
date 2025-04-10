import Logo from '@/components/ui/Logo';
import useScreenBreakpoints from '@/hooks/useScreenBreakpoints';

export default function Header() {
	const { isScreenMD } = useScreenBreakpoints();

	if (!isScreenMD) return;

	return (
		<header className="px-3 py-1">
			<Logo />
		</header>
	);
}
