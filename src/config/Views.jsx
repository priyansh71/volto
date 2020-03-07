import loadable from '@loadable/component';
import DefaultView from '@plone/volto/components/theme/View/DefaultView';
import ListingView from '@plone/volto/components/theme/View/ListingView';
import SummaryView from '@plone/volto/components/theme/View/SummaryView';
import TabularView from '@plone/volto/components/theme/View/TabularView';
import LinkView from '@plone/volto/components/theme/View/LinkView';

const FileView = loadable(() =>
  import('@plone/volto/components/theme/View/FileView'),
);
const ImageView = loadable(() =>
  import('@plone/volto/components/theme/View/ImageView'),
);
const EventView = loadable(() =>
  import('@plone/volto/components/theme/View/EventView'),
);
const NewsItemView = loadable(() =>
  import('@plone/volto/components/theme/View/NewsItemView'),
);
const AlbumView = loadable(() =>
  import('@plone/volto/components/theme/View/AlbumView'),
);
const NotFoundView = loadable(() =>
  import('@plone/volto/components/theme/NotFound/NotFound'),
);

// Layout View Registry
export const layoutViews = {
  summary_view: SummaryView,
  tabular_view: TabularView,
  listing_view: ListingView,
  link_redirect_view: LinkView,
  album_view: AlbumView,
};

// Content Types View Registry
export const contentTypesViews = {
  'News Item': NewsItemView,
  File: FileView,
  Image: ImageView,
  Event: EventView,
};

// Default view
export const defaultView = DefaultView;

export const errorViews = {
  '404': NotFoundView,
};
