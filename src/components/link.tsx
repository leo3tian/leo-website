import { ReactNode } from 'react';

function Link({to, children}: {to:string, children:ReactNode}) {
    return(
        <a
            href={to}
            className="text-bluefont-medium text-blue-600 dark:text-blue-500 hover:underline"
            target="_blank"
        >
            {children}
        </a>
    );
}
export default Link;