import { getRandomBoolean, buttonStyle, buttonVariant, contentPosition } from './index';
// UPLOADER
function getRandomCodeUploader() {
    const codes = ['u1', 'u2', 'u3'];
    return codes[Math.floor(Math.random() * codes.length)];
}
export function getRandomUploader() {
    const code = getRandomCodeUploader();
    const hasButton = getRandomBoolean();
    const hasImage = getRandomBoolean();
    const uploader = {
        code,
        button: hasButton,
        ...(hasButton && {
            buttonStyle,
            buttonVariant,
        }),
        ...(hasImage && {
            image: `${Math.floor(Math.random() * 4) + 1}.png`,
        }),
    };
    switch (code) {
        case 'u2':
        case 'u3':
            uploader.imageOutside = `${Math.floor(Math.random() * 49) + 1}.png`;
            uploader.contentPosition = contentPosition;
            break;
        default:
            break;
    }
    return uploader;
}
//# sourceMappingURL=uploader.js.map