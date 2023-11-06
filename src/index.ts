export async function generateResolvedPromises() {
    return Promise.all(
        [
            Promise.resolve(1),
            Promise.resolve(1)
        ]
    );
}

export function generateRejectedPromises() {
    return Promise.all(
        [
            Promise.resolve(1),
            Promise.reject(1)
        ]
    );
}