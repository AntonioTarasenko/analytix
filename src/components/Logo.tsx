/**
 * @copyright Copyright (c) 2024 SHOSTKABRO
 * @license Apache 2.0
 */

import { favicon, logo } from '@/assets';
type LogoProps = {
  variant?: 'default' | 'icon';
};

const Logo = ({ variant = 'default' }: LogoProps) => {
  return (
    <a
      href=''
      className=''
    >
      {variant === 'default' && (
        <img
          src={logo}
          alt='logo'
          width={150}
          height={31}
        />
      )}

      {variant === 'icon' && (
        <img
          src={favicon}
          alt='favicon'
          width={32}
          height={32}
        />
      )}
    </a>
  );
};

export default Logo;
