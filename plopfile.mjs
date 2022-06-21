export default function (plop) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const transformName = (str) => {
    return str.toLowerCase().replace(/ /g, '-');
  };

  const transformFileTxtName = (str) => {
    return str.toLowerCase().replace(/txt/g, 'tsx');
  };

  const transformComponentName = (str, replaceStr) => {
    return str.replace(`component`, replaceStr);
  };

  const transformComponentFileName = (componentFileName, componentName) => {
    return transformComponentName(
      transformFileTxtName(componentFileName),
      componentName
    );
  };

  plop.setGenerator('post', {
    description: 'new post in repo',
    prompts: [
      {
        type: 'input',
        name: 'postName',
        message: 'Post Name: ',
      },
    ],
    actions: (data) => {
      const templateDir = 'tools/generators/plop-templates';
      const postFileName = transformName(data.postName);
      const postDir = `posts`;
      const actions = [];

      actions.push({
        type: 'add',
        path: `${postDir}/${transformName(postFileName)}.md`,
        templateFile: `${templateDir}/posts/article.md`,
      });

      actions.push({
        type: 'modify',
        path: `${postDir}/${transformName(postFileName)}.md`,
        pattern: /(-- PLOP TITLE PATH HERE --)/gi,
        template: `${postFileName}`,
      });

      actions.push({
        type: 'modify',
        path: `${postDir}/${transformName(postFileName)}.md`,
        pattern: /(-- PLOP TITLE NAME HERE --)/gi,
        template: `${data.postName}`,
      });

      return [...actions];
    },
  });

  plop.setGenerator('ui-components', {
    description: 'new ui component in repo',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Component Name: ',
      },
      {
        type: 'list',
        name: 'layerFolder',
        message: 'Layer Folder: ',
        choices: [
          { name: 'atoms', value: 'atoms' },
          { name: 'molecules', value: 'molecules' },
          { name: 'organisms', value: 'organisms' },
          { name: 'templates', value: 'templates' },
          { name: 'others', value: 'others' },
        ],
      },
    ],
    actions: (data) => {
      const templateDir = 'tools/generators/plop-templates';
      const componentName = transformName(data.componentName);
      const componentFolder = data.componentFolder;
      const layerFolder = data.layerFolder;

      const componentDir = `libs/ui-components/src/lib/${layerFolder}/${componentName}`;
      const layerDir = `libs/ui-components/src/lib/${layerFolder}`;
      const filesToAlwaysCopyOver = [
        'component.spec.txt',
        'component.stories.txt',
        'component.txt',
      ];
      const actions = [];

      // Copy over basic files
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'add',
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentName
          )}`,
          templateFile: `${templateDir}/ui-components/${file}`,
        });
      });

      // Modify component*.tsx
      filesToAlwaysCopyOver.forEach((file) => {
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentName
          )}`,
          pattern: /(-- PLOP COMPONENT NAME HERE --)/gi,
          template: `${capitalizeFirstLetter(componentName)}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentName
          )}`,
          pattern: /(-- PLOP COMPONENT FOLDER NAME HERE --)/gi,
          template: `${componentName}`,
        });
        actions.push({
          type: 'modify',
          path: `${componentDir}/${transformComponentFileName(
            file,
            componentName
          )}`,
          pattern: /(-- PLOP LAYER FOLDER HERE --)/gi,
          template: `${layerFolder}`,
        });
      });

      return [
        ...actions,
        {
          type: 'append',
          path: `${layerDir}/index.ts`,
          template: `export * from './${componentName}/${componentName}';`,
        },
      ];
    },
  });
}
