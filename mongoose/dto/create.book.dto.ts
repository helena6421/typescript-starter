// с главного сайта https://docs.nestjs.com/controllers#request-object

// Определяем схему DTO (Data Transfer Object).
// DTO — это объект, который определяет, как данные будут отправляться по сети.
// Можно определить схему DTO, используя интерфейсы TypeScript или простые классы.
// Интересно, что мы рекомендуем использовать здесь классы . Почему?
// Классы являются частью стандарта JavaScript ES6, и поэтому
// они сохраняются как реальные сущности в скомпилированном JavaScript.
// С другой стороны, поскольку интерфейсы TypeScript удаляются во время транспиляции,
// Nest не может ссылаться на них во время выполнения.
// Это важно, поскольку такие функции, как Pipes, предоставляют дополнительные возможности,
// когда они имеют доступ к метатипу переменной во время выполнения.

interface CreateBookDTO {
  id: number;
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
  fileBook: string;
}

export default CreateBookDTO;
