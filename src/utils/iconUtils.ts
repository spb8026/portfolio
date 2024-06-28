
import { faMusic, faProjectDiagram, faCalendarDay, faLightbulb, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// Helper function to map icon string to FontAwesome icon component
export const getFontAwesomeIcon = (iconName: string) => {
  switch (iconName) {
    case 'faMusic':
      return faMusic;
    case 'faProjectDiagram':
      return faProjectDiagram;
    case 'faCalendarDay':
      return faCalendarDay;
    case 'faLightbulb':
      return faLightbulb;
    case 'faBriefcase':
      return faBriefcase;
    case 'faGraduationCap':
      return faGraduationCap;
    default:
      return faMusic; // Default to faMusic if icon name is not recognized
  }
};
