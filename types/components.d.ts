declare namespace Components {
	export interface IHero {
		greetingText: string;
		heroInfoText: string;
		launchYear: number;
		rotateEffectText: string;
		title: Array<string>;
	}

	// content area
	export interface ITextArea{
		type: string;
		intro: string;
		firstRteSection: Object;
		secondRteSection: Object |null;
		linkTextOverwrite: string;
		link: Object;
	}

	export interface ICta{
		type: string;
		title: Array<string>;
		rotateEffectText: string;
	}

	export interface ITableList{
		items: Array<ITableListItem>;
	}
	export interface ITableListItem{
		year: string;
		place:string;
		description: string;
	}


	export interface IColumnList{
		items: Array<IColumnListItem>;
	}
	export interface IColumnListItem{
		title: string;
		listItems:Array<any>;
	}

	export interface IContentArea{
		contentBlocksArea: Array<ITextArea | ICta>;
	}

	// work
	export interface IWorkItem{
		pageTitle: string;
		previewImage: Array<any>;
		role: string;
		slug: string;
	}
	export interface IWorkList{
		items: Array<IWorkItem>;
	}
}
