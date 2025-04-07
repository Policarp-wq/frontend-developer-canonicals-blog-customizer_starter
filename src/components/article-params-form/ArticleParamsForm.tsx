import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { ArticleStateType } from 'src/constants/articleProps';

export type TArticleProps = {
	currentState: ArticleStateType,
	setter: (state: ArticleStateType) => void;
}

export const ArticleParamsForm = ({setter, currentState}: TArticleProps) => {

	return (
		<>
			<ArrowButton />
			<aside
				className={styles.container}>
				<form className={styles.form}>
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
