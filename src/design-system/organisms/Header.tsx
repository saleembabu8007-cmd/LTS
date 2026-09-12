export { Navbar as Header } from '../../components/navigation/Navbar';
export type { HeaderProps } from '../../components/navigation/Navbar';

export interface NavItemConfig {
  id: string;
  label: string;
  href?: string;
  hasMegaMenu?: boolean;
}
