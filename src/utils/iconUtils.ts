
import { faMusic, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";

// Helper function to map icon string to FontAwesome icon component
export const getFontAwesomeIcon = (iconName: string) => {
  switch (iconName) {
    case 'faMusic':
      return faMusic;
    case 'faProjectDiagram':
      return faProjectDiagram;
    // Add more cases for other icons as needed
    default:
      return faMusic; // Default to faMusic if icon name is not recognized
  }
};
