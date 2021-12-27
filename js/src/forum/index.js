import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/components/DiscussionListItem';
import avatar from 'flarum/common/helpers/avatar';
import Link from 'flarum/common/components/Link';

app.initializers.add('justoverclock/last-post-useravatar', () => {
  extend(DiscussionListItem.prototype, 'infoItems', function (items) {
    const discussion = this.attrs.discussion;
    const lastPostedUser = discussion.lastPostedUser();
    const lastPostedUserName = discussion.lastPostedUser().displayName()

    items.add(
      'lastPostedUserAvatar',
      <Link
        className="DiscussionListItem-author"
        href={lastPostedUser ? app.route.user(lastPostedUser) : '#'}
        title={app.translator.trans('justoverclock-last-post-useravatar.forum.lastPostedUser') + lastPostedUserName}>
        {avatar(lastPostedUser, { title: '', className: 'lastPostedUserAvatar' })}
      </Link>
    );
  });
});
