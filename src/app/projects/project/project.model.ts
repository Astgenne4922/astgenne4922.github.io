export type Project = {
    title: string;
    body: string;
    buttons: Button[];
};

export type Button = {
    link: string;
    is_route: boolean;
    badge: string;
    alt: string;
};
