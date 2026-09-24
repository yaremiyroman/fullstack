import {
    MAX_IMAGE_COUNT,
    MAX_IMAGE_SIZE_BYTES,
    MIN_IMAGE_DIMENSION,
    MAX_IMAGE_DIMENSION,
    ALLOWED_IMAGE_EXTENSIONS,
    ALLOWED_IMAGE_MIME_TYPES,
} from '../data/constants';


export const getFileExtension = (fileName = '') => {
    const dotIndex = fileName.lastIndexOf('.');

    return dotIndex === -1 ? '' : fileName.slice(dotIndex).toLowerCase();
};

export const isAllowedImageFormat = (file) => {
    const extension = getFileExtension(file.name);

    return ALLOWED_IMAGE_EXTENSIONS.includes(extension) || ALLOWED_IMAGE_MIME_TYPES.includes(file.type);
};

export const getImageDimensions = (file) => new Promise((resolve, reject) => {
    const image = new Image();
    const imageURL = URL.createObjectURL(file);

    image.onload = () => {
        resolve({ width: image.width, height: image.height });
        URL.revokeObjectURL(imageURL);
    };

    image.onerror = () => {
        URL.revokeObjectURL(imageURL);
        reject(new Error(`Unable to read dimensions for "${file.name}".`));
    };

    image.src = imageURL;
});
