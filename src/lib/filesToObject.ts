
export default function filesToObject(files: Record<string, unknown>) {
    const entries = Object.entries(files).map(([file, content]) => {
        const key = file.replace(/^(.*)\/([^/]+).svg$/, "$2");
        return [key, content];
    });

    return Object.fromEntries(entries);
}