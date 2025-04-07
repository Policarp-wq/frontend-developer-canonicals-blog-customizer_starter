import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { ArticleStateType, backgroundColors, contentWidthArr, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { Select } from '../select';
import { useState } from 'react';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

export type TArticleProps = {
	currentState: ArticleStateType,
	setter: (state: ArticleStateType) => void;
}

export type TConfigurationState = ArticleStateType & {
	opened: boolean
}

export const ArticleParamsForm = ({setter, currentState: prevState}: TArticleProps) => {
	const [state, setState] = useState({...prevState, opened: false});
	return (
		<>
			<ArrowButton onClick={() => setState(prev => ({ ...prev, opened: !prev.opened }))}/>
			<aside
				className={`${styles.container} ${state.opened ? styles.container_open : ""}`}>
				<form className={styles.form}>
					<Select selected={state.fontFamilyOption} title='Шрифт' options={fontFamilyOptions} onChange={opt => setState({ ...state, fontFamilyOption: opt})}/>
					<RadioGroup name='kek' title='Размер шрифта' selected={state.fontSizeOption} options={fontSizeOptions}/>
					<Select selected={state.fontColor} title='Цвет шрифта' options={fontColors}/>
					<Separator/>
					<Select selected={state.backgroundColor} title='Цвет фона' options={backgroundColors}/>
					<Select selected={state.contentWidth} title='Ширина контента' options={contentWidthArr}/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
