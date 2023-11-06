import { generateRejectedPromises, generateResolvedPromises } from ".";

test('test promise.all - generateResolvedPromises', async () => {
    expect(await generateResolvedPromises()).toStrictEqual([1,1]);
});

test('test promise.all - generateRejectedPromises', async () => {
    await expect(await generateRejectedPromises()).rejects.toThrow(Error);
});