"use strict";

module.exports = {
	types: [
		{ value: "docs", name: "docs: Changed docs" },
		{ value: "fix", name: "fix: Bug fix" }
	],

	scopes: [
		{ name: "api" },
		{ name: "styles" },
		{ name: "other" },
		{ name: "info" }
	],

	messages: {
		type: "Какие изменения вы вносите?",
		scope: "\nВыберите ОБЛАСТЬ, которую вы изменили (опционально):",
		customScope: "Укажите свою ОБЛАСТЬ:",
		subject: "Напишите КОРОТКОЕ описание в ПОВЕЛИТЕЛЬНОМ наклонении:\n",
		body: 'Напишите ПОДРОБНОЕ описание (опционально). Используйте "|" для новой строки:\n',
		breaking: "Список BREAKING CHANGES (опционально):\n",
		footer:
			"Место для мета данных (тикетов, ссылок и остального). Например: SECRETMRKT-700, SECRETMRKT-800:\n",
		confirmCommit: "Вас устраивает получившийся коммит?"
	},

	allowCustomScopes: true,
	allowBreakingChanges: false,
	subjectLimit: 72
};