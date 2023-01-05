import { trace, posterize, Posterizer, Potrace, PotraceOptions, PosterizerOptions } from 'potrace';

// Potrace
const potraceOpts: PotraceOptions = { turdPolicy: 'black', alphaMax: 2 };
const potrace = new Potrace(potraceOpts);

potrace.loadImage('', (potrace, err) => {
    const newSvg: string = potrace.getSVG().replace('', '');
});

const potraceSvg: string = potrace.getSVG();
const potracePath: string = potrace.getTagPath('black');
const potracePathScaled: string = potrace.getTagPath('black', {x: 1.0, y: 0.5);

// Postererizer
const posterizerOpts: PosterizerOptions = {
    steps: 4,
    fillStrategy: 'dominant',
    rangeDistribution: 'auto',
};
const posterizer = new Posterizer(posterizerOpts);
posterizer.loadImage('', (posterizer, err) => {
    const newSvg: string = posterizer.getSVG().replace('', '');
});

const posterizerSvg: string = posterizer.getSVG();

// exported fns

trace('', (err, svg, potrace) => {
    const newSvg: string = svg.replace('', '');
});

posterize('', (err, svg, posterizer) => {
    const newSvg: string = svg.replace('', '');
});
