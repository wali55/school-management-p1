const currentWorkWeek = () => {
    const today = new Date();
    const dayOfWeek = today.getDay();

    const startOfWeek = new Date(today);

    if (dayOfWeek === 0) {
        startOfWeek.setDate(today.getDate() + 1);
    }
}