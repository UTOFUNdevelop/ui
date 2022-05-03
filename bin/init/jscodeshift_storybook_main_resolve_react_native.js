export const parser = "tsx";

export default function transformer(file, api) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.AssignmentExpression)
    .forEach((path) => {
      const webpackFinal = j.template.expression`
          {
            webpackFinal: async (config, { configType }) => {
              config.resolve.alias = {
                "react-native": "react-native-web",
              };
              return config;
            },
          }
        `.properties[0];
      console.log(webpackFinal);

      path.value.right.properties.push(webpackFinal);
    })
    .toSource();
}
