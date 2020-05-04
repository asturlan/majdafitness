const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('nextjs-fonts');
const optimizedImages = require('next-optimized-images');

const moduleClassName = process.env.NODE_ENV === "production" ? "[hash:base64]" : "[path][name]__[local]";

const nextConfig = {
    pageExtensions: ['js', 'jsx'], //maybe not needed
}

module.exports = withPlugins(
    [
        [optimizedImages, {}],
        [withCss, {}],
        [withSass, {}],
        [withFonts, {}]
    ],
    nextConfig
);