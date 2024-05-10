const fs = require('fs');
const { writeFile, readFile } = require('./solution');

jest.mock('fs');

describe('File System Operations', () => {
  const mockFileName = 'mock.txt';
  const mockContent = 'This is mock content.';

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Write content to file', async () => {
    fs.writeFile.mockImplementation((file, content, callback) => {
      callback(null);
    });

    const result = await writeFile(mockFileName, mockContent);
    expect(result).toBe(`File "${mockFileName}" created successfully.`);
    expect(fs.writeFile).toHaveBeenCalledWith(
      mockFileName,
      mockContent,
      expect.any(Function)
    );
  });

  test('Read content from file', async () => {
    const mockData = 'Mock file data';
    fs.readFile.mockImplementation((file, encoding, callback) => {
      callback(null, mockData);
    });

    const result = await readFile(mockFileName);
    expect(result).toBe(mockData);
    expect(fs.readFile).toHaveBeenCalledWith(
      mockFileName,
      'utf8',
      expect.any(Function)
    );
  });

  test('Error handling: Write content to file', async () => {
    const mockError = new Error('Write error');
    fs.writeFile.mockImplementation((file, content, callback) => {
      callback(mockError);
    });

    await expect(writeFile(mockFileName, mockContent)).rejects.toThrow(mockError);
  });

  test('Error handling: Read content from file', async () => {
    const mockError = new Error('Read error');
    fs.readFile.mockImplementation((file, encoding, callback) => {
      callback(mockError);
    });

    await expect(readFile(mockFileName)).rejects.toThrow(mockError);
  });
});
