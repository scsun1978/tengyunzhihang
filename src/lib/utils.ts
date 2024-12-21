export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}