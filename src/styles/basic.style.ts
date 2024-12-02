import { createStyleSheet } from 'react-native-unistyles';
import { Platform } from 'react-native';
import { SIZES } from 'styles/sizes';

export const basicStyles = createStyleSheet((theme) => ({
  baseSafeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingBottom: 0,
  },
  basicContainer: {
    paddingTop: 0,
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: theme.colors.white,
  },
  container: {
    paddingTop: 0,
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  scrollView: {
    flex: 1,
  },
  centerRowFlex1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
  modalContentStyle: {
    height: SIZES.height,
    ...Platform.select({
      ios: {
        marginTop: 50,
      },
    }),
  },
  fullHeightView: {
    height: SIZES.height,
  },
  headerContect: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backgroundColor,
  },
  headerTitleScreen: {
    fontWeight: 'bold',
    paddingVertical: SIZES.padding,
    color: theme.colors.white,
    fontSize: SIZES.fontSize20,
    textAlign: 'center',
  },
  flex1Container: { flex: 1 },
  authImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: { fontSize: SIZES.fontSize10, color: theme.colors.red },
  submitButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    height: 50,
    marginTop: 40,
    borderRadius: 10,
  },
  btnText: {
    fontSize: SIZES.fontSize18,
    color: theme.colors.btnTextColor,
    fontWeight: 'bold',
  },
  loadingBtnText: {
    fontSize: SIZES.fontSize18,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: theme.colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SIZES.padding * 4,
  },
  noCartImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    paddingVertical: SIZES.padding * 2,
  },
  emptyText: {
    fontWeight: 'bold',
    paddingVertical: SIZES.padding * 2,
    color: theme.colors.black,
  },
  webViwStyle: {
    ...Platform.select({
      ios: {
        marginTop: 50,
      },
    }),
  },
  baseText: { fontSize: SIZES.fontSize12, color: theme.colors.text },
  emptyTextDesc: { fontWeight: 'normal', color: theme.colors.grey },
  browseText: { fontSize: SIZES.fontSize12, color: theme.colors.primary },
  borderButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    width: 180,
    height: 30,
    marginTop: 20,
    borderRadius: 5,
  },
  hiddenItem: {
    width: 0,
    height: 0,
    overflow: 'hidden',
  },
  emptyContent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lightGray4,
    paddingVertical: SIZES.padding * 4,
  },
  emptyImg: {
    width: 150,
    height: 150,
    borderRadius: 75,
    paddingVertical: SIZES.padding * 2,
  },
  emptyTxt: {
    fontWeight: 'bold',
    width: '80%',
    paddingVertical: SIZES.padding * 2,
    fontSize: 13,
    textAlign: 'center',
    color: theme.colors.grey,
  },
  btn: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptySubTxt: { fontWeight: 'normal', fontSize: 13, color: theme.colors.grey },
}));
