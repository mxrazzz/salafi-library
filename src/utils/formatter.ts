export const formatDate = (date: string | Date): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

export const formatBookTitle = (title: string): string => {
    return title.trim().replace(/\s+/g, ' ').toUpperCase();
};

export const formatScholarName = (name: string): string => {
    return name.split(' ').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
};