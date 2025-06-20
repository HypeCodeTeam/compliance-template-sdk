import { templateConverterPortal } from './templates/templateConverterPortal';
import { templateMonoPortal } from './templates/templateMonoPortal';
import { templateMultiPortal } from './templates/templateMultiPortal';
import { templateStreamPortal } from './templates/templateStreamPortal';

export function getThemeTemplate(themeName: string, sections: string[]) {
  switch (themeName) {
    case 'mono-portal':
      return templateMonoPortal(themeName, sections[0]);
    case 'multi-portal':
      return templateMultiPortal(themeName);
    case 'stream-portal':
      return templateStreamPortal(themeName, sections);
    case 'converter-portal':
      return templateConverterPortal(themeName);
    default:
      return null;
  }
}
