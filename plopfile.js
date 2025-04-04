export default function (plop) {
    // create your generators here
    plop.setGenerator('component', {
        description: 'generate a React component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [
            {
                type: "add",
                path: "src/components/{{name}}/index.ts",
                templateFile: "plop-templates/components/index.hbs"
            },
            {
                type: "add",
                path: "src/components/{{name}}/{{name}}.tsx",
                templateFile: "plop-templates/components/tsx.hbs"
            },
            {
                type: "add",
                path: "src/components/{{name}}/{{name}}.module.css",
                templateFile: "plop-templates/components/module.hbs"
            },
            {
                type: "add",
                path: "src/components/{{name}}/{{name}}.stories.ts",
                templateFile: "plop-templates/components/stories.hbs"
            },
        ],
    });
};
